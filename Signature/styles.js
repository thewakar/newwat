document.addEventListener('DOMContentLoaded', () => {
  const signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
  });

// Save the signature to Google Drive
async function saveSignatureToGoogleDrive() {
  // Get the signature image data
  const signatureImageData = signaturePad.toDataURL('image/png');

  // Create a new Blob object from the signature image data
  const signatureImageBlob = new Blob([signatureImageData]);


  const signaturesFolder = DriveApp.getFolderById('1wCuq1FCTx5hX7VfDpOUQ2Veo0GR8iXFf');
  
  const signatureFile = signaturesFolder.createFile(signatureImageBlob, 'signature.png');

  // Save the file
  const saved = await signatureFile.save();

  // Return the saved status
  return saved;
  
}

// Bind the save button to the saveSignatureToGoogleDrive function
document.getElementById('save').addEventListener('click', saveSignatureToGoogleDrive);

var cancelButton = document.getElementById('clear');

cancelButton.addEventListener('click', function (event) {
  signaturePad.clear();

});
});
