# name: UPPA Optinmonster
# about:  Integra OptinMonster a Discourse
# version: 0.0.1
# authors: Benjamin Meghnagi

enabled_site_setting :uppa_enabled
register_asset "javascripts/uppa-manipola.js", :server_side

# Without this, all the Onebox stuff isn't loaded,
# so methods like `matches_regexp` do not work.
# It's weird. I know.
Onebox = Onebox
class Onebox::Engine::uppa
  include Onebox::Engine

  def self.priority
    0
  end
end
