const express=require('express');
const expenseController=require('../controllers/expense');

const router=express.Router();

router.get('/',expenseController.getExpenses);


router.post('/addExpense',expenseController.addExpense);

router.get('/delete/:id',expenseController.deleteExpenseById);

router.get('/:id',expenseController.getExpenseById);


module.exports=router;