var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

$(document).ready(function () {
  display();
});

function display() {
  var tab =
    "<table><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th>";
  for (var i = 0; i < products.length; i++) {
    tab +=
      "<tr><td>" +
      products[i].id +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].brand +
      "</td><td>" +
      products[i].os +
      '</td><td> <a href = "#" onclick= "Delete(' +
      parseInt(products[i].id) +
      ')" id= delete >Delete</a></td>';
  }

  tab += "</table>";
  document.getElementById("product_table").innerHTML = tab;
}

function Delete(x) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == x) {
      console.log(i);
      products.splice(i, 1);
    }
  }
  display();
}

$("#btn").click(function () {
  var y = document.getElementById("input").value;
  var tab =
    "<table><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th>";
  console.log(y);
  for (var i = 0; i < products.length; i++) {
    if (!(products[i].id == y)) {
      console.log(products[i]);
    } else {
      tab +=
        "<tr><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        '</td><td> <a href = "#" onclick= "Delete(' +
        parseInt(products[i].id) +
        ')" id= delete >Delete</a></td>';
    }
  }
  tab += "</table>";
  document.getElementById("product_table").innerHTML = tab;
});

function myfunction() {
  var x = document.getElementById("select1").value;
  var y = document.getElementById("select2").value;

  var tab =
    "<table><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th>";

  console.log("hello " + x + "" + y);

  for (var i = 0; i < products.length; i++) {
    if (x == products[i].os) {
      tab +=
        "<tr><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        '</td><td> <a href = "#" onclick= "Delete(' +
        parseInt(products[i].id) +
        ')" id= delete >Delete</a></td>';
	}

	
 

	if(y==products[i].brand){
		tab +=
        "<tr><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        '</td><td> <a href = "#" onclick= "Delete(' +
        parseInt(products[i].id) +
        ')" id= delete >Delete</a></td>';
	}

	// 	tab += "</table>";
    // document.getElementById("product_table").innerHTML = tab;

	
    
	if((x=="")||(y=="")){
		display();

	}

	if((x==products[i].os)&&(y==products[i].brand)){
		tab +=
        "<tr><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        '</td><td> <a href = "#" onclick= "Delete(' +
        parseInt(products[i].id) +
        ')" id= delete >Delete</a></td>';
	}

	// 	tab += "</table>";
    // document.getElementById("product_table").innerHTML = tab;



	}
	tab += "</table>";
    document.getElementById("product_table").innerHTML = tab;

}
