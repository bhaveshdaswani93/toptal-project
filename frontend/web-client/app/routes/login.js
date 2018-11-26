import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({

  store: inject(),

  session: inject(),

  actions: {
    login(form) {
      this.get('session').authenticate(
        'authenticator:token',
        {
          email: form.get('email'),
          password: form.get('password')
        }
      ).then(() => {
        this.transitionTo("meals");
      }).catch(() => {
        alert("Login failed");
      });
    }
  }
});
