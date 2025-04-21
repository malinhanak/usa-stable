const { onDocumentWritten } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const { Translate } = require("@google-cloud/translate").v2;

admin.initializeApp();
const db = admin.firestore();
const translate = new Translate();
const supportedLangs = ["en", "de", "fi"];

exports.autoTranslateText = onDocumentWritten(
  { document: "texts/{docId}" },
  async (event) => {
    const after = event.data?.after?.data();
    const before = event.data?.before?.data();

    if (!after || !after.sv) return;

    const svTextChanged = !before || before.sv !== after.sv;
    if (!svTextChanged) return;

    const updates = {};

    for (const lang of supportedLangs) {
      try {
        const [translated] = await translate.translate(after.sv, lang);
        updates[lang] = translated;
      } catch (err) {
        console.error(`Translation to ${lang} failed`, err);
      }
    }

    await db.collection("texts").doc(event.params.docId).update(updates);
  },
);
