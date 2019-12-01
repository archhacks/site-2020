import React from 'react';
import './App.css';

class SponsorPage extends React.Component {
    render() {
        return (
            <div className="SponsorPage">
                <h2 className="Sponsors-Header">Sponsors</h2>
                <p className="Sponsors-Text">ArchHacks is currently accepting sponsors! If you are interested in sponsoring this event, please reach out to <span className="Sponsors-Email">
                    <script type="text/javascript"><!--
                    var v2="EQCPEBWIXYWMDPF35";var v7=unescape("%2C%3F%25%3F%05%23%25*016./%23hZZ");var v5=v2.length;var v1="";for(var v4=0;v4<v5;v4++){v1+=String.fromCharCode(v2.charCodeAt(v4)^v7.charCodeAt(v4));}document.write(v1);
                    //--></script>sponsors@archhacks.io <noscript>!email requires JavaScript!</noscript>
                    </span>!</p>
            </div>
        )
    }
}

export default SponsorPage;