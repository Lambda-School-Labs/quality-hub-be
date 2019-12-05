module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAvailability {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateIndustry {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type Availability {
  id: ID!
  start_hour: Int!
  start_minute: Int!
  coach: String!
  bookingID: String
  year: Int!
  month: Int!
  day: Int!
  isOpen: Boolean!
  recurring: Boolean!
}

type AvailabilityConnection {
  pageInfo: PageInfo!
  edges: [AvailabilityEdge]!
  aggregate: AggregateAvailability!
}

input AvailabilityCreateInput {
  id: ID
  start_hour: Int!
  start_minute: Int!
  coach: String!
  bookingID: String
  year: Int!
  month: Int!
  day: Int!
  isOpen: Boolean!
  recurring: Boolean!
}

input AvailabilityCreateManyInput {
  create: [AvailabilityCreateInput!]
  connect: [AvailabilityWhereUniqueInput!]
}

type AvailabilityEdge {
  node: Availability!
  cursor: String!
}

enum AvailabilityOrderByInput {
  id_ASC
  id_DESC
  start_hour_ASC
  start_hour_DESC
  start_minute_ASC
  start_minute_DESC
  coach_ASC
  coach_DESC
  bookingID_ASC
  bookingID_DESC
  year_ASC
  year_DESC
  month_ASC
  month_DESC
  day_ASC
  day_DESC
  isOpen_ASC
  isOpen_DESC
  recurring_ASC
  recurring_DESC
}

type AvailabilityPreviousValues {
  id: ID!
  start_hour: Int!
  start_minute: Int!
  coach: String!
  bookingID: String
  year: Int!
  month: Int!
  day: Int!
  isOpen: Boolean!
  recurring: Boolean!
}

input AvailabilityScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start_hour: Int
  start_hour_not: Int
  start_hour_in: [Int!]
  start_hour_not_in: [Int!]
  start_hour_lt: Int
  start_hour_lte: Int
  start_hour_gt: Int
  start_hour_gte: Int
  start_minute: Int
  start_minute_not: Int
  start_minute_in: [Int!]
  start_minute_not_in: [Int!]
  start_minute_lt: Int
  start_minute_lte: Int
  start_minute_gt: Int
  start_minute_gte: Int
  coach: String
  coach_not: String
  coach_in: [String!]
  coach_not_in: [String!]
  coach_lt: String
  coach_lte: String
  coach_gt: String
  coach_gte: String
  coach_contains: String
  coach_not_contains: String
  coach_starts_with: String
  coach_not_starts_with: String
  coach_ends_with: String
  coach_not_ends_with: String
  bookingID: String
  bookingID_not: String
  bookingID_in: [String!]
  bookingID_not_in: [String!]
  bookingID_lt: String
  bookingID_lte: String
  bookingID_gt: String
  bookingID_gte: String
  bookingID_contains: String
  bookingID_not_contains: String
  bookingID_starts_with: String
  bookingID_not_starts_with: String
  bookingID_ends_with: String
  bookingID_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  month: Int
  month_not: Int
  month_in: [Int!]
  month_not_in: [Int!]
  month_lt: Int
  month_lte: Int
  month_gt: Int
  month_gte: Int
  day: Int
  day_not: Int
  day_in: [Int!]
  day_not_in: [Int!]
  day_lt: Int
  day_lte: Int
  day_gt: Int
  day_gte: Int
  isOpen: Boolean
  isOpen_not: Boolean
  recurring: Boolean
  recurring_not: Boolean
  AND: [AvailabilityScalarWhereInput!]
  OR: [AvailabilityScalarWhereInput!]
  NOT: [AvailabilityScalarWhereInput!]
}

type AvailabilitySubscriptionPayload {
  mutation: MutationType!
  node: Availability
  updatedFields: [String!]
  previousValues: AvailabilityPreviousValues
}

input AvailabilitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AvailabilityWhereInput
  AND: [AvailabilitySubscriptionWhereInput!]
  OR: [AvailabilitySubscriptionWhereInput!]
  NOT: [AvailabilitySubscriptionWhereInput!]
}

input AvailabilityUpdateDataInput {
  start_hour: Int
  start_minute: Int
  coach: String
  bookingID: String
  year: Int
  month: Int
  day: Int
  isOpen: Boolean
  recurring: Boolean
}

input AvailabilityUpdateInput {
  start_hour: Int
  start_minute: Int
  coach: String
  bookingID: String
  year: Int
  month: Int
  day: Int
  isOpen: Boolean
  recurring: Boolean
}

input AvailabilityUpdateManyDataInput {
  start_hour: Int
  start_minute: Int
  coach: String
  bookingID: String
  year: Int
  month: Int
  day: Int
  isOpen: Boolean
  recurring: Boolean
}

input AvailabilityUpdateManyInput {
  create: [AvailabilityCreateInput!]
  update: [AvailabilityUpdateWithWhereUniqueNestedInput!]
  upsert: [AvailabilityUpsertWithWhereUniqueNestedInput!]
  delete: [AvailabilityWhereUniqueInput!]
  connect: [AvailabilityWhereUniqueInput!]
  set: [AvailabilityWhereUniqueInput!]
  disconnect: [AvailabilityWhereUniqueInput!]
  deleteMany: [AvailabilityScalarWhereInput!]
  updateMany: [AvailabilityUpdateManyWithWhereNestedInput!]
}

input AvailabilityUpdateManyMutationInput {
  start_hour: Int
  start_minute: Int
  coach: String
  bookingID: String
  year: Int
  month: Int
  day: Int
  isOpen: Boolean
  recurring: Boolean
}

input AvailabilityUpdateManyWithWhereNestedInput {
  where: AvailabilityScalarWhereInput!
  data: AvailabilityUpdateManyDataInput!
}

input AvailabilityUpdateWithWhereUniqueNestedInput {
  where: AvailabilityWhereUniqueInput!
  data: AvailabilityUpdateDataInput!
}

input AvailabilityUpsertWithWhereUniqueNestedInput {
  where: AvailabilityWhereUniqueInput!
  update: AvailabilityUpdateDataInput!
  create: AvailabilityCreateInput!
}

input AvailabilityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start_hour: Int
  start_hour_not: Int
  start_hour_in: [Int!]
  start_hour_not_in: [Int!]
  start_hour_lt: Int
  start_hour_lte: Int
  start_hour_gt: Int
  start_hour_gte: Int
  start_minute: Int
  start_minute_not: Int
  start_minute_in: [Int!]
  start_minute_not_in: [Int!]
  start_minute_lt: Int
  start_minute_lte: Int
  start_minute_gt: Int
  start_minute_gte: Int
  coach: String
  coach_not: String
  coach_in: [String!]
  coach_not_in: [String!]
  coach_lt: String
  coach_lte: String
  coach_gt: String
  coach_gte: String
  coach_contains: String
  coach_not_contains: String
  coach_starts_with: String
  coach_not_starts_with: String
  coach_ends_with: String
  coach_not_ends_with: String
  bookingID: String
  bookingID_not: String
  bookingID_in: [String!]
  bookingID_not_in: [String!]
  bookingID_lt: String
  bookingID_lte: String
  bookingID_gt: String
  bookingID_gte: String
  bookingID_contains: String
  bookingID_not_contains: String
  bookingID_starts_with: String
  bookingID_not_starts_with: String
  bookingID_ends_with: String
  bookingID_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  month: Int
  month_not: Int
  month_in: [Int!]
  month_not_in: [Int!]
  month_lt: Int
  month_lte: Int
  month_gt: Int
  month_gte: Int
  day: Int
  day_not: Int
  day_in: [Int!]
  day_not_in: [Int!]
  day_lt: Int
  day_lte: Int
  day_gt: Int
  day_gte: Int
  isOpen: Boolean
  isOpen_not: Boolean
  recurring: Boolean
  recurring_not: Boolean
  AND: [AvailabilityWhereInput!]
  OR: [AvailabilityWhereInput!]
  NOT: [AvailabilityWhereInput!]
}

input AvailabilityWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Booking {
  id: ID!
  year: Int!
  month: Int!
  day: Int!
  hour: Int!
  minute: Int!
  coach: String!
  seeker: String!
  availability(where: AvailabilityWhereInput, orderBy: AvailabilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Availability!]
  pending: Boolean
  confirmed: Boolean
}

type BookingConnection {
  pageInfo: PageInfo!
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  id: ID
  year: Int!
  month: Int!
  day: Int!
  hour: Int!
  minute: Int!
  coach: String!
  seeker: String!
  availability: AvailabilityCreateManyInput
  pending: Boolean
  confirmed: Boolean
}

type BookingEdge {
  node: Booking!
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  year_ASC
  year_DESC
  month_ASC
  month_DESC
  day_ASC
  day_DESC
  hour_ASC
  hour_DESC
  minute_ASC
  minute_DESC
  coach_ASC
  coach_DESC
  seeker_ASC
  seeker_DESC
  pending_ASC
  pending_DESC
  confirmed_ASC
  confirmed_DESC
}

type BookingPreviousValues {
  id: ID!
  year: Int!
  month: Int!
  day: Int!
  hour: Int!
  minute: Int!
  coach: String!
  seeker: String!
  pending: Boolean
  confirmed: Boolean
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
  AND: [BookingSubscriptionWhereInput!]
  OR: [BookingSubscriptionWhereInput!]
  NOT: [BookingSubscriptionWhereInput!]
}

input BookingUpdateInput {
  year: Int
  month: Int
  day: Int
  hour: Int
  minute: Int
  coach: String
  seeker: String
  availability: AvailabilityUpdateManyInput
  pending: Boolean
  confirmed: Boolean
}

input BookingUpdateManyMutationInput {
  year: Int
  month: Int
  day: Int
  hour: Int
  minute: Int
  coach: String
  seeker: String
  pending: Boolean
  confirmed: Boolean
}

input BookingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  month: Int
  month_not: Int
  month_in: [Int!]
  month_not_in: [Int!]
  month_lt: Int
  month_lte: Int
  month_gt: Int
  month_gte: Int
  day: Int
  day_not: Int
  day_in: [Int!]
  day_not_in: [Int!]
  day_lt: Int
  day_lte: Int
  day_gt: Int
  day_gte: Int
  hour: Int
  hour_not: Int
  hour_in: [Int!]
  hour_not_in: [Int!]
  hour_lt: Int
  hour_lte: Int
  hour_gt: Int
  hour_gte: Int
  minute: Int
  minute_not: Int
  minute_in: [Int!]
  minute_not_in: [Int!]
  minute_lt: Int
  minute_lte: Int
  minute_gt: Int
  minute_gte: Int
  coach: String
  coach_not: String
  coach_in: [String!]
  coach_not_in: [String!]
  coach_lt: String
  coach_lte: String
  coach_gt: String
  coach_gte: String
  coach_contains: String
  coach_not_contains: String
  coach_starts_with: String
  coach_not_starts_with: String
  coach_ends_with: String
  coach_not_ends_with: String
  seeker: String
  seeker_not: String
  seeker_in: [String!]
  seeker_not_in: [String!]
  seeker_lt: String
  seeker_lte: String
  seeker_gt: String
  seeker_gte: String
  seeker_contains: String
  seeker_not_contains: String
  seeker_starts_with: String
  seeker_not_starts_with: String
  seeker_ends_with: String
  seeker_not_ends_with: String
  availability_every: AvailabilityWhereInput
  availability_some: AvailabilityWhereInput
  availability_none: AvailabilityWhereInput
  pending: Boolean
  pending_not: Boolean
  confirmed: Boolean
  confirmed_not: Boolean
  AND: [BookingWhereInput!]
  OR: [BookingWhereInput!]
  NOT: [BookingWhereInput!]
}

input BookingWhereUniqueInput {
  id: ID
}

scalar DateTime

type Industry {
  id: ID!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type IndustryConnection {
  pageInfo: PageInfo!
  edges: [IndustryEdge]!
  aggregate: AggregateIndustry!
}

input IndustryCreateInput {
  id: ID
  name: String!
  posts: PostCreateManyWithoutIndustryInput
}

input IndustryCreateOneWithoutPostsInput {
  create: IndustryCreateWithoutPostsInput
  connect: IndustryWhereUniqueInput
}

input IndustryCreateWithoutPostsInput {
  id: ID
  name: String!
}

type IndustryEdge {
  node: Industry!
  cursor: String!
}

enum IndustryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type IndustryPreviousValues {
  id: ID!
  name: String!
}

type IndustrySubscriptionPayload {
  mutation: MutationType!
  node: Industry
  updatedFields: [String!]
  previousValues: IndustryPreviousValues
}

input IndustrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IndustryWhereInput
  AND: [IndustrySubscriptionWhereInput!]
  OR: [IndustrySubscriptionWhereInput!]
  NOT: [IndustrySubscriptionWhereInput!]
}

input IndustryUpdateInput {
  name: String
  posts: PostUpdateManyWithoutIndustryInput
}

input IndustryUpdateManyMutationInput {
  name: String
}

input IndustryUpdateOneRequiredWithoutPostsInput {
  create: IndustryCreateWithoutPostsInput
  update: IndustryUpdateWithoutPostsDataInput
  upsert: IndustryUpsertWithoutPostsInput
  connect: IndustryWhereUniqueInput
}

input IndustryUpdateWithoutPostsDataInput {
  name: String
}

input IndustryUpsertWithoutPostsInput {
  update: IndustryUpdateWithoutPostsDataInput!
  create: IndustryCreateWithoutPostsInput!
}

input IndustryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [IndustryWhereInput!]
  OR: [IndustryWhereInput!]
  NOT: [IndustryWhereInput!]
}

input IndustryWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createAvailability(data: AvailabilityCreateInput!): Availability!
  updateAvailability(data: AvailabilityUpdateInput!, where: AvailabilityWhereUniqueInput!): Availability
  updateManyAvailabilities(data: AvailabilityUpdateManyMutationInput!, where: AvailabilityWhereInput): BatchPayload!
  upsertAvailability(where: AvailabilityWhereUniqueInput!, create: AvailabilityCreateInput!, update: AvailabilityUpdateInput!): Availability!
  deleteAvailability(where: AvailabilityWhereUniqueInput!): Availability
  deleteManyAvailabilities(where: AvailabilityWhereInput): BatchPayload!
  createBooking(data: BookingCreateInput!): Booking!
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateManyBookings(data: BookingUpdateManyMutationInput!, where: BookingWhereInput): BatchPayload!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  createIndustry(data: IndustryCreateInput!): Industry!
  updateIndustry(data: IndustryUpdateInput!, where: IndustryWhereUniqueInput!): Industry
  updateManyIndustries(data: IndustryUpdateManyMutationInput!, where: IndustryWhereInput): BatchPayload!
  upsertIndustry(where: IndustryWhereUniqueInput!, create: IndustryCreateInput!, update: IndustryUpdateInput!): Industry!
  deleteIndustry(where: IndustryWhereUniqueInput!): Industry
  deleteManyIndustries(where: IndustryWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  price: Int!
  position: String!
  industry: Industry!
  description: String!
  coachID: String!
  createdAt: DateTime!
  lastUpdated: DateTime!
  company: String!
  isPublished: Boolean!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  price: Int!
  position: String!
  industry: IndustryCreateOneWithoutPostsInput!
  description: String!
  coachID: String!
  company: String!
  isPublished: Boolean
  tags: TagCreateManyWithoutPostsInput
}

input PostCreateManyWithoutIndustryInput {
  create: [PostCreateWithoutIndustryInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutTagsInput {
  create: [PostCreateWithoutTagsInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutIndustryInput {
  id: ID
  price: Int!
  position: String!
  description: String!
  coachID: String!
  company: String!
  isPublished: Boolean
  tags: TagCreateManyWithoutPostsInput
}

input PostCreateWithoutTagsInput {
  id: ID
  price: Int!
  position: String!
  industry: IndustryCreateOneWithoutPostsInput!
  description: String!
  coachID: String!
  company: String!
  isPublished: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  position_ASC
  position_DESC
  description_ASC
  description_DESC
  coachID_ASC
  coachID_DESC
  createdAt_ASC
  createdAt_DESC
  lastUpdated_ASC
  lastUpdated_DESC
  company_ASC
  company_DESC
  isPublished_ASC
  isPublished_DESC
}

type PostPreviousValues {
  id: ID!
  price: Int!
  position: String!
  description: String!
  coachID: String!
  createdAt: DateTime!
  lastUpdated: DateTime!
  company: String!
  isPublished: Boolean!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  coachID: String
  coachID_not: String
  coachID_in: [String!]
  coachID_not_in: [String!]
  coachID_lt: String
  coachID_lte: String
  coachID_gt: String
  coachID_gte: String
  coachID_contains: String
  coachID_not_contains: String
  coachID_starts_with: String
  coachID_not_starts_with: String
  coachID_ends_with: String
  coachID_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastUpdated: DateTime
  lastUpdated_not: DateTime
  lastUpdated_in: [DateTime!]
  lastUpdated_not_in: [DateTime!]
  lastUpdated_lt: DateTime
  lastUpdated_lte: DateTime
  lastUpdated_gt: DateTime
  lastUpdated_gte: DateTime
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  isPublished: Boolean
  isPublished_not: Boolean
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  price: Int
  position: String
  industry: IndustryUpdateOneRequiredWithoutPostsInput
  description: String
  coachID: String
  company: String
  isPublished: Boolean
  tags: TagUpdateManyWithoutPostsInput
}

input PostUpdateManyDataInput {
  price: Int
  position: String
  description: String
  coachID: String
  company: String
  isPublished: Boolean
}

input PostUpdateManyMutationInput {
  price: Int
  position: String
  description: String
  coachID: String
  company: String
  isPublished: Boolean
}

input PostUpdateManyWithoutIndustryInput {
  create: [PostCreateWithoutIndustryInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutIndustryInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutIndustryInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutTagsInput {
  create: [PostCreateWithoutTagsInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutIndustryDataInput {
  price: Int
  position: String
  description: String
  coachID: String
  company: String
  isPublished: Boolean
  tags: TagUpdateManyWithoutPostsInput
}

input PostUpdateWithoutTagsDataInput {
  price: Int
  position: String
  industry: IndustryUpdateOneRequiredWithoutPostsInput
  description: String
  coachID: String
  company: String
  isPublished: Boolean
}

input PostUpdateWithWhereUniqueWithoutIndustryInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutIndustryDataInput!
}

input PostUpdateWithWhereUniqueWithoutTagsInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutTagsDataInput!
}

input PostUpsertWithWhereUniqueWithoutIndustryInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutIndustryDataInput!
  create: PostCreateWithoutIndustryInput!
}

input PostUpsertWithWhereUniqueWithoutTagsInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutTagsDataInput!
  create: PostCreateWithoutTagsInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  industry: IndustryWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  coachID: String
  coachID_not: String
  coachID_in: [String!]
  coachID_not_in: [String!]
  coachID_lt: String
  coachID_lte: String
  coachID_gt: String
  coachID_gte: String
  coachID_contains: String
  coachID_not_contains: String
  coachID_starts_with: String
  coachID_not_starts_with: String
  coachID_ends_with: String
  coachID_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastUpdated: DateTime
  lastUpdated_not: DateTime
  lastUpdated_in: [DateTime!]
  lastUpdated_not_in: [DateTime!]
  lastUpdated_lt: DateTime
  lastUpdated_lte: DateTime
  lastUpdated_gt: DateTime
  lastUpdated_gte: DateTime
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  isPublished: Boolean
  isPublished_not: Boolean
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
  coachID: String
}

type Query {
  availability(where: AvailabilityWhereUniqueInput!): Availability
  availabilities(where: AvailabilityWhereInput, orderBy: AvailabilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Availability]!
  availabilitiesConnection(where: AvailabilityWhereInput, orderBy: AvailabilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AvailabilityConnection!
  booking(where: BookingWhereUniqueInput!): Booking
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  industry(where: IndustryWhereUniqueInput!): Industry
  industries(where: IndustryWhereInput, orderBy: IndustryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Industry]!
  industriesConnection(where: IndustryWhereInput, orderBy: IndustryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IndustryConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  node(id: ID!): Node
}

type Subscription {
  availability(where: AvailabilitySubscriptionWhereInput): AvailabilitySubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  industry(where: IndustrySubscriptionWhereInput): IndustrySubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  id: ID
  name: String!
  posts: PostCreateManyWithoutTagsInput
}

input TagCreateManyWithoutPostsInput {
  create: [TagCreateWithoutPostsInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutPostsInput {
  id: ID
  name: String!
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
  posts: PostUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateManyWithoutPostsInput {
  create: [TagCreateWithoutPostsInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutPostsInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutPostsInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutPostsDataInput {
  name: String
}

input TagUpdateWithWhereUniqueWithoutPostsInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutPostsDataInput!
}

input TagUpsertWithWhereUniqueWithoutPostsInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutPostsDataInput!
  create: TagCreateWithoutPostsInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
  name: String
}
`
      }
    