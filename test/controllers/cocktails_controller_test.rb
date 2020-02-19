require 'test_helper'

class CocktailsControllerTest < ActionDispatch::IntegrationTest
  test "should get doses" do
    get cocktails_doses_url
    assert_response :success
  end

end
