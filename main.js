
$(document).ready(function() {
  osobaServis.inicijaliziraj();
});

let osobaServis = {
  inicijaliziraj: function() {
    console.log("init");
    console.log("validacija");
    console.log("validacija jmbg")
    console.log("dodaj red");
    console.log("obrisi red");
    console.log("obrisi formu");
    osobaServis.validacija();
    osobaServis.validirajJmbg();
    osobaServis.dodajRed();
    osobaServis.obrisiRed();
    osobaServis.obrisiFormu();
    console.log("init zavrsen");
  },

  validacija: function() {
    $("form").on("click", "#btn-modal", function() {
      console.log("validacija forme servis");
    });
  },

  validirajJmbg: function() {
    $("#kontaktForma").on("click","#btn-modal", function() {
      console.log("jmbg validacija servis");
    });
  },

  dodajRed: function() {
    $("#btn-modal").off().on("click", function() {
      let osoba = {
        ime: $("#ime").val(),
        prezime: $("#prezime").val(),
        jmbg: $("#jmbg").val(),
        email: $("#email").val()
      };
      console.log("dodaj red servis");
      console.log(osoba);
    });
  },

  obrisiRed: function() {
    $("#table").on("click", "#btnDel", function() {
      console.log("brisanje reda servis");
    });
  },

  obrisiFormu: function() {
    $("body").off().on("click", "#btn-modal", function() {
      console.log("ocisti formu servis");
      osobaServis.obrisiFormu();
    });
  }
};

function validacija() {
  $("#kontaktForma").validate({
    rules: {
      ime: {
        required: true,
        minlength: 3,
      },
      prezime: {
        required: true,
        minlength: 3
      },
      jmbg: {
        required: true,
        minlength:13,
        maxlength: 13
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      ime: "Upisite ime",
      prezime: "Upisite prezime",
      jmbg: "Unesite jmbg",
      email: "Unesite ispravnu email adresu"
    },
    submitHandler: function(form) {
      dodajRed();
      obrisiFormu();
      obrisiRed();
      form.submit();
    }
  });
};

function dodajRed() {
  if ($("#table tbody").length == 0) {
    $("#table").append("<tbody></tbody>");
  };
 
  $("#table tbody").append(
    "<tr id='tRow'>" +
      "<td class='firstN'>" +
      $("#ime").val() +
      "</td>" +
      "<td class='lastN'>" +
      $("#prezime").val() +
      "</td>" +
      "<td>" +
      $("#jmbg").val() +
      "</td>" +
      "<td>" +
      $("#email").val() +
      "</td>" +
      "<td>" +
      "<button type='button' id='btnDel' class='btn btn-default js-delete'>" +
      "<span class='btn btn-danger' />" +
      "X</button>" +
      "</td>" +
      "</tr>"    
  );
};

function obrisiRed() {
  $("#table").on("click", "#btnDel", function() {
    $(this).parents("tr").remove();
  });
};

function obrisiFormu() {
  $("#ime").val("");
  $("#prezime").val("");
  $("#jmbg").val("");
  $("#email").val("");
};

function validateJmbg() {
    let jmbg = $("#jmbg").val();
 
    let suma = 7 * jmbg[0] + 6 * jmbg[1] + 5 * jmbg[2] + 4 * jmbg[3] + 3 * jmbg[4] + 2 * jmbg[5] +
      7 * jmbg[6] + 6 * jmbg[7] + 5 * jmbg[8] + 4 * jmbg[9] + 3 * jmbg[10] + 2 * jmbg[11];
 
    let k = suma % 11;
    let r = 11 - k;
    
      if (jmbg.length !== 13) {
        console.log("JMBG mora imati trinaest karaktera.");
        return;
    }
      if (r === parseInt(jmbg[12])) {
        console.log("JMBG je ispravan.");
    } else {
        console.log("JMBG nije ispravan.");
        alert("JMBG nije ispravan!")
        return false
    }
 };

 $("#kontaktForma").off().on("click", "#btn-modal", validateJmbg);
 validacija();


