const apiKey = 'zEYlOsFglIxIp7c9DS9DHx3-bGJaqrqHnZqKNl3jPVJDVtrRJMWxDSAhNCNsCDtQPxvP9vC8q_cgbsVYB8KfQdp1Nggf-qQzoWiFz_wOULy6FBBX9ZBdPDAiooW2W3Yx';

export const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            imageSrc: business.image_url,
            name: business.name,
            address:  business.location.address1,
            city:  business.location.city,
            state:  business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
}
