<script>
export default {
  name: "invite",
  fetch({redirect}) {
    redirect('https://discord.com/oauth2/authorize?client_id=530376105182625804&permissions=3164161&scope=bot%20applications.commands')
  }
}
</script>
