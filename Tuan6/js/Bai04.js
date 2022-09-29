
    var D = new Date();
    var ns, nht;
    nht = D.getFullYear();
    alert(nht);
    do {
    ns = prompt("Nhập năm sinh : ","");
    } while (parseInt(ns)>nht || parseInt(ns)<0);
     // Các thông tin khác ...