
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      var nList = document.querySelector("#cow");


      // Set a callback to run when the Google Visualization API is loaded.
      function chart(){
          var foods = parseInt(document.querySelector("#food").value);
          var housing = parseInt(document.querySelector("#housing").value);
          var saving = parseInt(document.querySelector("#saving").value);
          var entertainment = parseInt(document.querySelector("#entertainment").value);
          var healthcare = parseInt(document.querySelector("#healthcare").value);
          var income = parseInt(document.querySelector("#income").value);
          if (!foods || !housing || !saving || !entertainment || !healthcare || !income){
              alert("Please fill all the values")
              return
          }
          var sum = foods + housing + saving + entertainment + healthcare;
          var others = income - sum;
          
          
          drawChart(foods, housing, saving, entertainment, healthcare, others)
          AddTab(foods, housing, saving, entertainment, healthcare, others);
      }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(foods, housing, saving, entertainment, healthcare, others) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Foods', foods],
          ['Housing', housing],
          ['Saving', saving],
          ['Entertainment', entertainment],
          ['HealthCare', healthcare],
          ["Others", others]
        ]);

        // Set chart options
        var piechart_options = {title:'Pie Chart: Financial Report',
                       width:400,
                       height:300};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);

        var barchart_options = {title:'Barchart: Financial Report',
                       width:400,
                       height:300,
                       legend: 'none'};
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart.draw(data, barchart_options);


      }
function AddTab(foods, housing, saving, entertainment, healthcare, others){
  foods=foods*12;
  housing=housing*12;
  saving=saving*12;
  entertainment=entertainment*12;
  healthcare=healthcare*12;
  others=others*12;
  var all=[foods,housing,saving,entertainment,healthcare,others]
  var tr = document.createElement("tr");
var td;
for (let i=0 ;i<6 ;i++){
  td=document.createElement("td");
  td.innerHTML=all[i];
  tr.appendChild(td);


}
nList.innerHTML=tr.innerHTML;
localStorage.setItem("nList",tr.innerHTML)

}



