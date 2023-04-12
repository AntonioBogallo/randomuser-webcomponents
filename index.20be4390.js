(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const r="https://randomuser.me/api/",c=()=>fetch(r).then(i=>i.json()).then(i=>i.results[0]).catch(i=>console.log(i));class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return`
    :host {
        display:block;
    }
    .card-container {
        min-width: 600px;
        display: inline-flex;
        border: solid 1px black;
        padding: 20px;
        gap: 20px;
        background-color: white;
        box-shadow: 4px 4px 4px #0008;
        font-family: "Caviar Dreams";
        margin: 10px;
        border-top: solid 5px green
    }

    .photo{
        display: flex;
        align-items: center;
    }

    .data :is(h1,h2) {
        margin: 0;
    }

    .name {
        font-family: "Tango Sans";
        font-weight: 200;
    }

    .birthday {
        font-size: 1.1rem;
        color: indigo;
    }
    `}render(){this.shadowRoot.innerHTML=`

        <style>${this.styles}</style>

        <div class="card-container">
            <div class="photo">
                <img src="${this.photoURL}" alt="">
            </div>
            <div class="data">

                <h1 class="name">${this.name}</h1>
                <h2 class="birthday">${this.birthday}</h2>

                <address class="location">
                    <span class="country">${this.country}</span>
                    <span class="city">${this.city}</span>
                </address>

                <div class="contact">
                    <div class="email">${this.email}</div>
                    <div class="phone">${this.phone}</div>
                </div>
                
            </div>
        </div>
    `}async connectedCallback(){await this.getData(),this.render()}async getData(){const t=await c();this.name=`${t.name.title} ${t.name.first} ${t.name.last}`,this.photoURL=t.picture.medium,this.birthday=t.dob.date,this.country=t.location.country,this.city=t.location.city,this.email=t.email,this.phone=t.phone}}customElements.define("random-card",l);
