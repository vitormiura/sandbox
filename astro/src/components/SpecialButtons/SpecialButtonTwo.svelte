<script>
  function specialFunction() {
    alert('you clicked me!');
  }
</script>

<button on:click={specialFunction}>
<slot/>
</button>