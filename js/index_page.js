String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};


function select_plan(i){
  var months =i;
  if(i==5){months = "5 + 1*"}
  if(i==10){months = "10 + 2*"}
  var table = document.getElementById("price_table");
  table.innerHTML = "";

  var cost = [700, 900, 1200, 1900, 2250]

  var new_price_plan =  `
    <tr>
      <td>{} Month</td>
      <td>3 Mbps</td>
      <td>Unlimited</td>
      <td>1 Mbps</td>
      <td style="color:black">₹ {}</td>
    </tr>
    <tr>
      <td>{} Month</td>
      <td>5 Mbps</td>
      <td>Unlimited</td>
      <td>2 Mbps</td>
      <td style="color:black">₹ {}</td>
    </tr>
    <tr>
      <td>{} Month</td>
      <td>10 Mbps</td>
      <td>Unlimited</td>
      <td>5 Mbps</td>
      <td style="color:black">₹ {}</td>
    </tr>
    <tr>
      <td>{} Month</td>
      <td>20 Mbps</td>
      <td>Unlimited</td>
      <td>10 Mbps</td>
      <td style="color:black">₹ {}</td>
    </tr>
    <tr>
      <td>{} Month</td>
      <td>25 Mbps</td>
      <td>Unlimited</td>
      <td>20 Mbps</td>
      <td style="color:black">₹ {}</td>
    </tr>
  `.format(months, cost[0]*i, months, cost[1]*i, months, cost[2]*i, months, cost[3]*i, months, cost[4]*i,)

  table.innerHTML = new_price_plan;
}