class Api::SessionsController < ApplicationController
    @user = User.find_by_credentials(
            params[:user][:email,],
            params[:user][:password])
        if @user
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Please enter a valid email", "Your password must contain at least 6 characters"], status: 422
        end
end