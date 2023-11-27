
let methodbuy = '';
$("#cart").hide();
$("#cart2").hide();
$("#cart3").hide();
$("#cart4").hide();
$("#cart5").hide();
$("#cart6").hide();
$("#cart7").hide();
$("#cart8").hide();
$("#cart9").hide();
$("#cart10").hide();
$("#cart11").hide();
$("#cart12").hide();



let taxValue = 0;
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;
let quantity7 = 0;
let quantity8 = 0;
let quantity9 = 0;
let quantity10 = 0;
let quantity11 = 0;
let quantity12 = 0;
pajak = 0.1;

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('#sidebar');
let closeCart = document.querySelector('#close-cart');

// Tampil Harga 1
$(document).ready(function () {
    $("#clickableImage").click(function () {
        $("#cart").show();

        var hargaText = $('#harga').text();
        var info = $('#infoItm').text();
        let integerValue = parseInt(hargaText);

        if (!isNaN(integerValue)) {
            $("#displayInfo").text(info);
            $("#displayValue").text("Price: Rp." + integerValue);

            taxValue += integerValue;
            pajakPersen = pajak * taxValue;
            pajakTotal = pajakPersen + taxValue;

            quantity1++;
            $("#tax").text(pajakTotal);
            $("#quantity").text(quantity1);
        } else {
            console.log("Conversion to Integer Failed");
        }
    });

    // Tampil Harga 2
    $("#clickableImage2").click(function () {
        $("#cart2").show();

        var hargaText = $('#harga2').text();
        var info = $('#infoItm2').text();
        let integerValue = parseInt(hargaText);

        if (!isNaN(integerValue)) {
            $("#displayInfo2").text(info);
            $("#displayValue2").text("Price: Rp." + integerValue);

            taxValue += integerValue;
            pajakPersen = pajak * taxValue;
            pajakTotal = pajakPersen + taxValue;
            quantity2++;
            $("#tax").text(pajakTotal);
            $("#quantity2").text(quantity2);
        } else {
            console.log("Conversion to Integer Failed");
        }
    });

    $("#exportToTxt").click(function () {
        changeText($("#dropdownButton").text());
        exportToTxt();
    });

    // Tampil Harga 3
    $("#clickableImage3").click(function () {
        $("#cart3").show();

        var hargaText = $('#harga3').text();
        var info = $('#infoItm3').text();
        let integerValue = parseInt(hargaText);

        if (!isNaN(integerValue)) {
            $("#displayInfo3").text(info);
            $("#displayValue3").text("Price: Rp." + integerValue);

            taxValue += integerValue;
            pajakPersen = pajak * taxValue;
            pajakTotal = pajakPersen + taxValue;
            quantity3++;
            $("#tax").text(pajakTotal);
            $("#quantity3").text(quantity3);
        } else {
            console.log("Conversion to Integer Failed");
        }
    });

    $("#exportToTxt").click(function () {
        changeText($("#dropdownButton").text());
        exportToTxt();
    });
});

// Tampil Harga 4
$("#clickableImage4").click(function () {
    $("#cart4").show();

    var hargaText = $('#harga4').text();
    var info = $('#infoItm4').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo4").text(info);
        $("#displayValue4").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity4++;
        $("#tax").text(pajakTotal);
        $("#quantity4").text(quantity4);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

// Tampil Harga 5
$("#clickableImage5").click(function () {
    $("#cart5").show();

    var hargaText = $('#harga5').text();
    var info = $('#infoItm5').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo5").text(info);
        $("#displayValue5").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity5++;
        $("#tax").text(pajakTotal);
        $("#quantity5").text(quantity5);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

$("#exportToTxt").click(function () {
    changeText($("#dropdownButton").text());
    exportToTxt();
});

// Tampil Harga 6
$("#clickableImage6").click(function () {
    $("#cart6").show();

    var hargaText = $('#harga6').text();
    var info = $('#infoItm6').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo6").text(info);
        $("#displayValue6").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity6++;
        $("#tax").text(pajakTotal);
        $("#quantity6").text(quantity6);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

$("#exportToTxt").click(function () {
    changeText($("#dropdownButton").text());
    exportToTxt();
});

// Tampil Harga 7
$("#clickableImage7").click(function () {
    $("#cart7").show();

    var hargaText = $('#harga7').text();
    var info = $('#infoItm7').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo7").text(info);
        $("#displayValue7").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity7++;
        $("#tax").text(pajakTotal);
        $("#quantity7").text(quantity7);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

// Tampil Harga 8
$("#clickableImage8").click(function () {
    $("#cart8").show();

    var hargaText = $('#harga8').text();
    var info = $('#infoItm8').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo8").text(info);
        $("#displayValue8").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity8++;
        $("#tax").text(pajakTotal);
        $("#quantity8").text(quantity9);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

// Tampil Harga 9
$("#clickableImage9").click(function () {
    $("#cart9").show();

    var hargaText = $('#harga9').text();
    var info = $('#infoItm9').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo9").text(info);
        $("#displayValue9").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity9++;
        $("#tax").text(pajakTotal);
        $("#quantity9").text(quantity9);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

// Tampil Harga 10
$("#clickableImage10").click(function () {
    $("#cart10").show();

    var hargaText = $('#harga10').text();
    var info = $('#infoItm10').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo10").text(info);
        $("#displayValue10").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity10++;
        $("#tax").text(pajakTotal);
        $("#quantity10").text(quantity10);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

// Tampil Harga 11
$("#clickableImage11").click(function () {
    $("#cart11").show();

    var hargaText = $('#harga11').text();
    var info = $('#infoItm11').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo11").text(info);
        $("#displayValue11").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity11++;
        $("#tax").text(pajakTotal);
        $("#quantity11").text(quantity11);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

// Tampil Harga 12
$("#clickableImage12").click(function () {
    $("#cart12").show();

    var hargaText = $('#harga12').text();
    var info = $('#infoItm12').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo12").text(info);
        $("#displayValue12").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakPersen = pajak * taxValue;
        pajakTotal = pajakPersen + taxValue;
        quantity12++;
        $("#tax").text(pajakTotal);
        $("#quantity12").text(quantity12);
    } else {
        console.log("Conversion to Integer Failed");
    }
});

$("#exportToTxt").click(function () {
    changeText($("#dropdownButton").text());
    exportToTxt();
});

// Remove pesanan
$("#rem1").click(function () {
    let itemPrice = parseInt($('#harga').text());
    taxValue -= itemPrice;
    quantity1--;
    if (quantity1 === 0) {
        $("#cart").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity").text(quantity1);
});

$("#rem2").click(function () {
    let itemPrice = parseInt($('#harga2').text());
    taxValue -= itemPrice;
    quantity2--;
    if (quantity2 === 0) {
        $("#cart2").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity2").text(quantity2);
});

$("#rem3").click(function () {
    let itemPrice = parseInt($('#harga3').text());
    taxValue -= itemPrice;
    quantity3--;
    if (quantity3 === 0) {
        $("#cart3").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity3").text(quantity3);
});

$("#rem4").click(function () {
    let itemPrice = parseInt($('#harga4').text());
    taxValue -= itemPrice;
    quantity4--;
    if (quantity4 === 0) {
        $("#cart4").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity4").text(quantity4);
});

$("#rem5").click(function () {
    let itemPrice = parseInt($('#harga5').text());
    taxValue -= itemPrice;
    quantity5--;
    if (quantity5 === 0) {
        $("#cart5").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity5").text(quantity5);
});

$("#rem6").click(function () {
    let itemPrice = parseInt($('#harga6').text());
    taxValue -= itemPrice;
    quantity6--;
    if (quantity6 === 0) {
        $("#cart6").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity6").text(quantity6);
});

$("#rem7").click(function () {
    let itemPrice = parseInt($('#harga7').text());
    taxValue -= itemPrice;
    quantity7--;
    if (quantity7 === 0) {
        $("#cart7").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity7").text(quantity7);
});

$("#rem8").click(function () {
    let itemPrice = parseInt($('#harga8').text());
    taxValue -= itemPrice;
    quantity8--;
    if (quantity8 === 0) {
        $("#cart8").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity8").text(quantity8);
});

$("#rem9").click(function () {
    let itemPrice = parseInt($('#harga9').text());
    taxValue -= itemPrice;
    quantity9--;
    if (quantity9 === 0) {
        $("#cart9").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity9").text(quantity9);
});

$("#rem10").click(function () {
    let itemPrice = parseInt($('#harga10').text());
    taxValue -= itemPrice;
    quantity10--;
    if (quantity10 === 0) {
        $("#cart10").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity10").text(quantity10);
});

$("#rem11").click(function () {
    let itemPrice = parseInt($('#harga11').text());
    taxValue -= itemPrice;
    quantity11--;
    if (quantity11 === 0) {
        $("#cart11").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity11").text(quantity11);
});

$("#rem12").click(function () {
    let itemPrice = parseInt($('#harga12').text());
    taxValue -= itemPrice;
    quantity12--;
    if (quantity12 === 0) {
        $("#cart12").hide();
    }
    pajakTotal = pajak * taxValue;
    pajakTotal2 = pajakTotal + taxValue;
    $("#tax").text(pajakTotal2);
    $("#quantity12").text(quantity12);
});


//tutup dan buka list harga
cartIcon.onclick = () => {
    cart.classList.add("active");
}

closeCart.onclick = () => {
    cart.classList.remove("active");
}



function exportToTxt() {
    if (methodbuy === 'Select Buy Method') {
        alert("Pilih Metode pembelian");
    } else {
        let txtContent = `STARBHAK-MARKET\n---------------\n`;

        const items = [
            { quantity: quantity1, name: $('#infoItm').text() },
            { quantity: quantity2, name: $('#infoItm2').text() },
            { quantity: quantity3, name: $('#infoItm3').text() },
            { quantity: quantity4, name: $('#infoItm4').text() },
            { quantity: quantity5, name: $('#infoItm5').text() },
            { quantity: quantity6, name: $('#infoItm6').text() },
            { quantity: quantity7, name: $('#infoItm7').text() },
            { quantity: quantity8, name: $('#infoItm8').text() },
            { quantity: quantity9, name: $('#infoItm9').text() },
            { quantity: quantity10, name: $('#infoItm10').text() },
            { quantity: quantity11, name: $('#infoItm11').text() },
            { quantity: quantity12, name: $('#infoItm12').text() },
            // Add other items in a similar manner
        ];

        items.forEach((item, index) => {
            if (item.quantity > 0) {
                txtContent += `Item ${index + 1}: Quantity - ${item.quantity} (${item.name})\n`;
            }
        });

        txtContent += `Tax: Rp.${pajakTotal}\nMethod: ${methodbuy}\n\nCashier: Ikyy Penguasa Langit\n--------------\nSee you soon!! My soon!`;

        const blob = new Blob([txtContent], { type: 'text/plain' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'invoice.txt';
        downloadLink.click();
    }
}

