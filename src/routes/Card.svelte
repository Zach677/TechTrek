<script>
  export let title = 'Card Title'
  export let content =
    'This is the content of the card. You can add more details here.'
</script>

<div class="center-container">
  <div class="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
</div>

<style>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    width: 300px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 16px;
  }

  h2 {
    color: #333;
  }

  p {
    color: #666;
  }
</style>
