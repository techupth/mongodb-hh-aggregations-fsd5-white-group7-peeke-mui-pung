db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_paid: { $avg: "$total_price" },
      total_quantity: { $avg: "$quantity" },
    },
  },
  { $sort: { total_paid: -1 } },
]);
