/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Loc8r - movie mania',
    pageHeader: {
    title: 'movie mania',
    strapline: 'Insightful reviews and ratings'
    },
    locations: [{
    name: 'kalki',
    cast:"prabhas,deepika,amitabh,kamal hasan,disha patani,vijay devarakonda",
    rating: 5,
    },{
    name: 'pushpa',
    cast:"allu arjun,rashmika,fahadh fasil",
    rating: 4,
    },{
    name: 'bahubali',
    cast:"prabhas,anushka,rana,adivi sesh,nasar",
    rating: 4.5,
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-addreview', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };