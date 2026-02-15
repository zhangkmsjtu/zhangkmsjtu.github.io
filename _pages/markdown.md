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

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PayPal Subscription Button</title>
  </head>
  <body>
    <div id="paypal-button-container-P-0YE321311R9328900NGIRUJA"></div>
    <script src="https://www.paypal.com/sdk/js?client-id=ÄãµÄCLIENT_ID&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
    <script>
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            plan_id: 'P-0YE321311R9328900NGIRUJA'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID);
        }
      }).render('#paypal-button-container-P-0YE321311R9328900NGIRUJA');
    </script>
  </body>
</html>

![](/images/yinglibo.gif)
