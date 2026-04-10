const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
  getAllEventsCorporate,
  getRegisteredUsersForEvent,
  postponeEvent,
  cancelEvent,
  getAllRatingsOfEvent,
  getAvgRatingsOfEvent,
} = require("./controller");

const { authMiddleware } = require("../../middleware/authMiddleware");

/* =========================
   CORPORATE EVENTS
========================= */

// Create event + get all events of a corporate
router
  .route("/corporate/:corporateId/events")
  .post(authMiddleware, createEvent)
  .get(authMiddleware, getAllEventsCorporate);

/* =========================
   EVENT ACTIONS
========================= */

// Postpone event
router
  .route("/corporate/:corporateId/events/:eventId/postponed")
  .put(authMiddleware, postponeEvent);

// Cancel event
router
  .route("/corporate/:corporateId/events/:eventId/cancel")
  .put(authMiddleware, cancelEvent);

// Update & delete event
router
  .route("/corporate/:corporateId/events/:eventId")
  .put(authMiddleware, updateEvent)
  .delete(authMiddleware, deleteEvent);

/* =========================
   REGISTRATIONS
========================= */

// Get registered users for an event
router
  .route("/corporate/:corporateId/events/:eventId/registered-users")
  .get(authMiddleware, getRegisteredUsersForEvent);

/* =========================
   RATINGS
========================= */

// Get all ratings of an event
router
  .route("/corporate/:corporateId/events/:eventId/ratings")
  .get(getAllRatingsOfEvent);

// Get average rating
router
  .route("/corporate/:corporateId/events/:eventId/ratings/average")
  .get(getAvgRatingsOfEvent);

/* =========================
   GENERAL EVENTS
========================= */

// Get all events (global)
router.route("/events").get(authMiddleware, getAllEvents);

// Get event by ID
router
  .route("/corporate/:corporateId/events/:eventId")
  .get(authMiddleware, getEventById);

module.exports = router;