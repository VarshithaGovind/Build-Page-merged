const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transactionController');
const { protect } = require('../middleware/authMiddleware');

router.post('/submit-transaction', protect, transactionController.submitTransactionId);
router.post('/admin/club/approve', protect, transactionController.approveClubMember);
router.post('/admin/club/reject', protect, transactionController.rejectClubMember);
router.get('/admin/club/transactions', protect, transactionController.getAllClubTransactions);

module.exports = router; 