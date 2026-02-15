---
permalink: /markdown/
title: "Contact"
author_profile: true
redirect_from: 
  - /md/
  - /markdown.html
---

* E-mail: zhangkeming@usst.edu.cn
* Website: zhangkm.link

![](/images/yinglibo.gif)
<div id="paypal-button-container-P-0YE321311R9328900NGIRUJA"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AR8DQJJaXXGCchTzP-2fLYEtLoefjwsbKhxM-8hp3szcyerSvNIgnSk24StyxlaK5taLOZIfs8uy6Aib&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-0YE321311R9328900NGIRUJA'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-0YE321311R9328900NGIRUJA'); // Renders the PayPal button
</script>