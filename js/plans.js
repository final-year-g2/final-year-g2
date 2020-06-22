String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

// Month
function change_month(months){
  var cost = [700, 900, 1200, 1900, 2250, 2800, 4200];
  var table = document.getElementsByClassName("month_column");

  var i=0;
  var mon = months;
  if(months==6){months = "5 + 1*"}
  if(months==12){months = "10 + 2*"}
  while(i<table.length){
      table[i].innerHTML = "{} Months".format(months)
      document.getElementById("price_"+i).innerHTML = "₹ "+ cost[i]*mon;
      i+=1;
    }

  var i = document.getElementsByClassName("active_row")[0].id.split("r")[1];
  var value = document.getElementById("price_"+i).innerHTML;
  console.log(i, value);
  value = parseInt(value.split(" ")[1]);
  value = parseInt(value * 1.18);
  document.getElementById("final_price").innerHTML = value;
}

function change_speed(i){
  document.getElementsByClassName("active_row")[0].classList.remove("active_row");
  document.getElementById("r"+i).classList.add("active_row");
  var value = document.getElementById("price_"+i).innerHTML;
  value = parseInt(value.split(" ")[1]);
  value = parseInt(value * 1.18);
  document.getElementById("final_price").innerHTML = value;
}


function change_limit(i){
  var value = i +" GB";
  if(i==1){value = i+" TB";}
  var table = document.getElementsByClassName("datalimit_column");
  console.log(table);
  var i = 0;
  while(i<table.length){
      table[i].innerHTML = "{}".format(value)
      i+=1;
    }
}