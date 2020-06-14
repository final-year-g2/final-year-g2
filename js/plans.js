String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};


// $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
  function select_plan(){

  var table = document.getElementById("price_table");
  // console.log(table.innerHTML);
  table.innerHTML = "";

  var new_price_plan =  `
  <tr>
    <td>Unlimited</td>
    <td>1 Mbps</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>Unlimited</td>
    <td>2 Mbps</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>Unlimited</td>
    <td>5 Mbps</td>
    <td>{}</td>
  </tr>
  `.format(parseInt(Math.random()*1000), parseInt(Math.random()*1000), parseInt(Math.random()*1000));

  table.innerHTML = new_price_plan;
}