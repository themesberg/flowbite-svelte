<script>
    import { Rating, Star, Heart, Thumbup, AdvancedRating, ScoreRating, RatingComment, Review } from 'svelte-5-ui-lib'
    import { LandmarkSolid, CalendarMonthSolid, UsersGroupOutline, ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
    
    const headerLabel = {
        desc1: '8.7',
        desc2: 'Excellent',
        desc3: '376 reviews',
        link: {
        label: 'Read all reviews',
        url: '/'
        }
    };

    let comment = {
        id: '1',
        user: {
        name: 'Jese Leos',
        img: {
            src: '/images/profile-picture-2.webp',
            alt: 'Jese Leos'
        },
        joined: 'Joined on August 2014'
        },
        total: 5,
        rating: 4.5,
        heading: 'Thinking to buy another one!',
        address: 'the UK',
        datetime: '2022-03-25'
    };

    let review = {
        name: 'Jese Leos',
        imgSrc: '/images/profile-picture-2.webp',
        imgAlt: 'jese leos',
        address: 'United States',
        reviewDate: 'January 20, 2022',
        title: 'Spotless, good appliances, excellent layout, host was genuinely nice and helpful.',
        rating: 8.79,
        item1: 'Apartament with City View',
        item2: '3 nights December 2021',
        item3: 'Family'
    };
</script>