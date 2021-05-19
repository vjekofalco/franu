import React, { useLayoutEffect } from 'react'

export const FacebookShareButtonScript = () => {
    useLayoutEffect(() => {
        const script = document.createElement('script')

        script.innerHTML = `(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`

        document.body.appendChild(script)
    })

    return (<>
            <div id="fb-root"></div>
        </>)
}
