import { fetchRandomUser } from "../modules/fetchRandomUser.js";

class RandomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return /* css */`
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
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`

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
    `;
  }

  async connectedCallback() {
    await this.getData();
    this.render();
  }

  async getData() {
    const user = await fetchRandomUser();
    this.name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    this.photoURL = user.picture.medium;
    this.birthday = user.dob.date;
    this.country = user.location.country;
    this.city = user.location.city;
    this.email = user.email;
    this.phone = user.phone;
  }
}

customElements.define("random-card", RandomCard);
