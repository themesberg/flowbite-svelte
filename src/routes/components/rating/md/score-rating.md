<script>
  import { ScoreRating } from 'svelte-5-ui-lib'
  const headerLabel = {
    desc1: '8.7',
    desc2: 'Excellent',
    desc3: '376 reviews',
    link: {
      label: 'Read all reviews',
      url: '/'
    }
  };
</script>

<ScoreRating
  {headerLabel}
  ratings={[
    { label: 'Staff', rating: 8.8 },
    { label: 'Comfort', rating: 8.9 },
    { label: 'Free WiFi', rating: 8.8 },
    { label: 'Facilities', rating: 5.4 }
  ]}
  ratings2={[
    { label: 'Value for money', rating: 8.9 },
    { label: 'Cleanliness', rating: 7.0 },
    { label: 'Location', rating: 8.0 }
  ]}
/>