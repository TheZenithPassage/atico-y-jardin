# Research: Public Booking Request

## Decision: Public requests are not confirmed reservations

**Rationale**: The system must avoid public auto-booking until private review, availability checks, and owner operations are ready.

**Alternatives considered**:

- Automatic confirmation. Rejected because it risks double-booking and requires more legal/payment decisions.
- Contact-only with no persistence. Rejected for v0.3.0 because admins need a review lifecycle.

## Decision: Do not block availability automatically

**Rationale**: A request is a lead, not an occupancy commitment. Blocking dates before review would create false scarcity and operational risk.

**Alternatives considered**:

- Soft hold dates for every request. Rejected until owners define hold policy.
- Hard block dates. Rejected because it is equivalent to auto-booking.

## Decision: Use manual admin conversion to reservation

**Rationale**: Conversion lets private reservation validation remain authoritative and avoids exposing internal availability details publicly.

**Alternatives considered**:

- Public visitor creates reservation directly. Rejected for v0.3.0.
- Admin re-enters requests manually. Rejected because it is avoidable duplicate work.

## Decision: Notification is optional for first request lifecycle

**Rationale**: Email or messaging setup adds deliverability, secrets, templates, and operational concerns. The core lifecycle can be validated without it.

**Alternatives considered**:

- Require email before release. Rejected if it delays the core request workflow.
- Ignore notification forever. Rejected as a future operational risk.

## Decision: Treat spam/captcha as a tracked risk

**Rationale**: Public forms invite invalid submissions, but captcha can add integration complexity. Basic server-side validation is required first.

**Alternatives considered**:

- Add captcha immediately. Deferred unless spam risk is confirmed or public exposure requires it.
- No validation. Rejected because public input must be protected.
