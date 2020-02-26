export const purchaseStock = stock => {
    return $.ajax({
        method: 'POST',
        url: "/api/stocks",
        data: {
            stock
        }
    })
}

export const updateStock = stock => {
    return $.ajax({
        method: 'PATCH',
        url: "/api/stocks/1",
        data: {
            stock
        }
    })
}

export const sellStock = stock => {
    return $.ajax({
        method: 'DELETE',
        url: "/api/stocks/1",
        data: {
            stock
        }
    })
}

export const fetchStock = stock => {
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=pk_558c6c46e31a43648ea6d1b072dad045`
    })
}