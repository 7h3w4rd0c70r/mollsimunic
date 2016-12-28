
var
l = 'en',
dictionary = {
    'en': {
        'header_main': 'Live in your dream',
        'header_why_us': 'Why us'
    },
    'cs': {
        'header_main': 'Postave si svůj sen',
        'header_why_us': 'Proč nás'
    }
},
w = function (word) {
    return dictionary[l][word];
},
loadDictionary = function () {
    $('[data-w]').each(function () {
        $(this).html(w($(this).data('w')));
    });
};

$(document).ready(function () {
    loadDictionary();
    $('.lang').click(function () {
        l = $(this).data('lang');
        loadDictionary();
    });
});


