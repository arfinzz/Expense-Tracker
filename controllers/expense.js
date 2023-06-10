const db=require('../utils/database');
const expense=require('../models/expense');


exports.getExpenses=(req,res,next)=>{
    expense.findAll()
    .then(Expenses=>{
        res.json(Expenses);
    })
    .catch(err=>{
        console.log(err);
    });
}

exports.getExpenseById=(req,res,next)=>{
    const id=req.params.id;
    expense.findAll({
        where:{
            id:id
        }
    })
    .then(Expense=>{
        //console.log(Expense[0])
        res.json(Expense[0]);
    })
    .catch(err=>{
        console.log(err);
    });


}


exports.deleteExpenseById=(req,res,next)=>{
    const id=req.params.id;
    expense.destroy({
        where:{
            id:id
        }
    })
    .then(Expense=>{
        //console.log(Expense[0])
        res.json({status:"success"});
    })
    .catch(err=>{
        console.log(err);
    });


}

exports.addExpense=(req,res,next)=>{
    console.log('this is insisahub');
    console.log(req.body);
    expense.create({
        itemname:req.body.itemname,
        cost:req.body.cost,
    })
    .then(()=>{
        res.json({status:"success"});
    })
    .catch(err=>{
        console.log(err);
    })
}