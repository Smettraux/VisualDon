var cl = (el, tag) => Array.from(el.querySelectorAll(tag))

cl(temp1, 'div.thumbnail')
  .map(el => {

    let product = el.querySelectorAll("a.title")[0].getAttribute('title')

    let price = el.querySelectorAll("h4.price")[0].textContent

    let rating = el.querySelectorAll("p[data-rating]")[0].getAttribute('data-rating');
    
    return {
        title: product,
        price: price,
        rating: rating
    }
  })