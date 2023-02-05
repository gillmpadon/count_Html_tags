const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", function() {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    const fileContent = reader.result;
    console.log(fileContent);
  };
});