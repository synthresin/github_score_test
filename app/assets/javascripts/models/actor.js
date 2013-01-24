GithubScore.Actor = DS.Model.extend({
  login: DS.attr('string'),
  name: DS.attr('string'),
  gravatarId: DS.attr('string'),
  location: DS.attr('string'),
  blog: DS.attr('string')
});