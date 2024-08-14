<script lang="ts">
  ...
  const handleClick = () => {
    alert('Page clicked');
  };
</script>

<Pagination {pages} {previous} {next} onclick={handleClick} />