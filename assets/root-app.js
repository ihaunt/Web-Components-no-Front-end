class CardNews extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card-left')

        const autor = document.createElement('span')
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous')

        const title = document.createElement('h1')
        title.textContent = this.getAttribute('title')

        const linkUrl = document.createElement('a')
        linkUrl.textContent = this.getAttribute('link-url') || ''
        linkUrl.href = this.getAttribute('link-url')

        const newsContent = document.createElement('p')
        newsContent.textContent = this.getAttribute('newsContent')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkUrl)
        cardLeft.appendChild(title)
        cardLeft.appendChild(newsContent)


        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card-right')

        const newsImage = document.createElement('img')
        newsImage.src = this.getAttribute('photo') || "assets/img/default-image.jpg"
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }


    style() {
        const style = document.createElement('style')
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 12px 11px 13px -5px rgba(0,0,0,0.55);
            -webkit-box-shadow: 12px 11px 13px -5px rgba(0,0,0,0.55);
            -moz-box-shadow: 12px 11px 13px -5px rgba(0,0,0,0.55);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card-left>span{
            font-weight: 400;
        }
        
        .card-left>h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card-left>p {
            color: rgb(20, 20, 20);
        } 

        .card-right  img{
            max-width: 350px;
            max-height: 330px;
        }
        `
        return style
    }
}

customElements.define('card-news', CardNews)