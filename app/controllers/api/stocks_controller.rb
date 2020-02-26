class Api::StocksController < ApplicationController
    def create
        @stock = Stock.new(stock_params)
        @stock.save

        @user = User.find_by(params[:user_id])
        total_cost = params[:quantity].to_f * params[:price].to_f
        new_balance = @user.money - total_cost
        @user.update(money: new_balance)

        render "api/users/show"
    end

    def update
        user_id = params[:user_id]
        stock_name = params[:name]
        price = params[:price]
        quantity = params[:quantity]

        @stock = Stock.all.find_by(user_id: user_id, name: stock_name)
        new_quantity = @stock.quantity + quantity
        @stock.update(quantity: new_quantity)

        @user = User.find_by(params[:user_id]);
        new_balance = @user.money - (price * quantity)
        @user.update(money: new_balance)
        
        render "api/users/show"
    end

    # def destroy
        
    # end

    def stock_params
        params.require(:stock).permit(:name, :ticker, :price, :quantity, :user_id)
    end
end