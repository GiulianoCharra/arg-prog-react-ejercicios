function getSelectedValue(e) {
  var selectedValue = e.target.value;
  document.getElementById("estadoSeleccionado").textContent = selectedValue;
}
document.getElementById("estado").addEventListener("change", getSelectedValue);
