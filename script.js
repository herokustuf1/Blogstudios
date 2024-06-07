$(function() {
    const offerHolder = $(".offer_holder");

    $.getJSON("https://www.cpagrip.com/common/offer_feed_json.php?user_id=1654164&pubkey=0b4447ad4c9ba1f085f4b1831b9ea1c0")
        .done(function(json_data) {
            if (json_data.offers && json_data.offers.length > 0) {
                let offerText = '';
                $.each(json_data.offers, function(key, offer) {
                    // Replace domain and construct the offer link
                    const offerLink = offer.offerlink.replace('www.cpagrip.com', 'motifiles.com');
                    offerText += `<a href="${offerLink}" target="_blank" rel="noopener noreferrer" class="offer_item">${offer.title}</a>`;
                });
                offerHolder.html(offerText);
            } else {
                offerHolder.text('No offers available at the moment.');
            }
        })
        .fail(function() {
            offerHolder.text('Failed to load offers. Please try again later.');
        });
});
