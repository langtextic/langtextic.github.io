// jQuery Ajax for feed Instagram Graph API
if ( $('#instagram-feed').length != 0 ) {

    var token = 'IGQVJYNHg2OTZAxNlFibU9nQVdaT1lxQXZAYYlhGSVhxV2pQc2tXWElJRF9NdGdXcFdRdDFDNF9kTHdld3RzR1AzWkpGZA2pfb1IyQTJRQWVmTTl1YnlIa3pEV3BSRWFYUXVfM3llQVVQZAkV2eTVJNmYxUQZDZD';
    var fields = 'id,media_type,media_url,thumbnail_url,timestamp,permalink,caption';
    var limit = 9999; // Set a number of display items

    $.ajax ( {
        url: 'https://graph.instagram.com/me/media?fields='+ fields +'&access_token='+ token +'&limit='+ limit,
        type: 'GET',
        success: function( response ) {
            var count = 0;
            for( var x in response.data ) {
                var link = response.data[x]['permalink'],
                    caption = response.data[x]['caption'],
                    image = response.data[x]['media_url'],
                    html = ''
                    ;
                if ( response.data[x]['media_type'] != 'VIDEO' ) {
                    count++;
                    if (count <= 8){
                    html += '<div class="instagram_new col-6 col-sm-3 padding-custom">';
                    html += '<a class="insta-link" href="' + link + '" rel="noopener" target="_blank">';
                    html += '<img src="' + image + '" loading="lazy" alt="' + caption + '" class="insta-image w-100 rounded-custom"/>';
                    html += '</a>';
                    html += '</div>';                    }
                }
                $('#instagram-feed').append(html);
            }
        },
        error: function(data) {
            var html = '<div class="class-no-data">No Images Found</div>';
            $('#instagram-feed').append(html);
            }
    });
}
