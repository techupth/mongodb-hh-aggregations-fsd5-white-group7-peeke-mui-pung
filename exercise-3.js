db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_paid: { $avg: "$total_price" },
      total_quantity: { $avg: "$quantity" },
    },
  },
  { $match: { _id: "medium" } },
]);
