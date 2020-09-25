$(function(){
$( ".unwanted-widgets .sora-billing-form" ).appendTo( ".sora-cart-checkout" );
 var d = new Date();
                              var month = d.getMonth()+1;
                              var day = d.getDate();
                              var output = ((''+month).length<2 ? '0' : '') + month + '/' +
                                  ((''+day).length<2 ? '0' : '') + day + '/' +
                                  d.getFullYear();
                              $('.soraorderdate').append(output);
$(".printsora").click(function() {
		window.print()
	});
});
$(function(){
$('#LinkList1 ul li:nth-child(1)').contents().appendTo('.sora-upi-details .sorainfoorder ul li.paytm-qr');
$('#LinkList1 ul li:nth-child(2)').contents().appendTo('.sora-upi-details .sorainfoorder ul li.phonepe-qr');
$('#LinkList1 ul li:nth-child(3)').contents().appendTo('.sora-upi-details .sorainfoorder ul li.gpay-qr');
});
$(function(){
$('#LinkList2 ul li:nth-child(1) span.details-first').contents().appendTo('.sora-bank-details .sorainfoorder th.bank-name');
$('#LinkList2 ul li:nth-child(2) span.details-first').contents().appendTo('.sora-bank-details .sorainfoorder th.branch-name');
$('#LinkList2 ul li:nth-child(3) span.details-first').contents().appendTo('.sora-bank-details .sorainfoorder th.branch-code');
$('#LinkList2 ul li:nth-child(4) span.details-first').contents().appendTo('.sora-bank-details .sorainfoorder th.account-name');
$('#LinkList2 ul li:nth-child(5) span.details-first').contents().appendTo('.sora-bank-details .sorainfoorder th.account-number');
$('#LinkList2 ul li:nth-child(1) span.details-second').contents().appendTo('.sora-bank-details .sorainfoorder td.bank-name-value');
$('#LinkList2 ul li:nth-child(2) span.details-second').contents().appendTo('.sora-bank-details .sorainfoorder td.branch-name-value');
$('#LinkList2 ul li:nth-child(3) span.details-second').contents().appendTo('.sora-bank-details .sorainfoorder td.branch-code-value');
$('#LinkList2 ul li:nth-child(4) span.details-second').contents().appendTo('.sora-bank-details .sorainfoorder td.account-name-value');
$('#LinkList2 ul li:nth-child(5) span.details-second').contents().appendTo('.sora-bank-details .sorainfoorder td.account-number-value');
});
