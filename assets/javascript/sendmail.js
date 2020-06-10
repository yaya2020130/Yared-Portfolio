let redirect = function () {
  $('.modal-trigger').trigger('click');
  setTimeout(function(){ window.location.replace('/'); }, 3000);
}

$('form').on('submit', (event) => {
  event.preventDefault();
  const first_name = $('#first_name').val().trim();
  const last_name = $('#last_name').val().trim();
  const email = $('#email').val().trim();
  const subject = "Website email from " + first_name + " " + last_name;
  const text = $('#text').val().trim();

  if (email === '' || text === '' || first_name === '' || last_name === '') {
      return window.alert('You must complete all fields before submitting')
  } else {

      const data = {
          email,
          subject,
          text: "First Name: " + first_name + "\nLast Name: " + last_name + "\nMessage:\n\n" + text
      };

      $.ajax({
          type: 'POST',
          url: '/email',
          data,
          success: function () {
              redirect();
          },
          error: function () {
              window.alert('Uh oh....It looks like something went wrong on my end :(\nTry again later or email me at the email address provided on the page.')
          }
      })

  }
})