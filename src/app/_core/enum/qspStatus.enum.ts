export enum QspStatus {
    pending = 'P', // Pending
    postponed = 'H', // Customer has Postponed Project
    cancelled = 'X', // Cancelled Quotes
    saleLost = 'D', // Sale Lost
    qspResponded = 'O', // QSP has Responded
    needsCorporateReview = 'CR', // Needs Corporate Review
    newQuote = 'N', // New Quote
    corporateApproved = 'M', // 'Corporately Approved Discount Uploaded'
    sourcingCanvas = 'SR', // 'Sourcing Canvas'
    additionalQuoteReview = 'AR', // 'Additional Quote Review'
    sourcingTeamReview = 'PS', // Sourcing Team Review
    sourcingTeamReviewComplete = 'PC', // Sourcing Team Review Complete
    fastTrack = 'FT', // Fast Track has Responded
    reviewedByManager = 'T', // To be Reviewed by Manager
    storeResponseNeeded = 'R', // Store Response Needed
    reviewedByQsp = 'Q', // To be Reviewed by QSP
    buildingMaterials = 'CS', // Building Materials Manager
    specialitySalesManager = 'SS', // Speciality Sales Manager
    estimateSold = 'C', // Estimate Sold
    staggeredSaleClosed = 'SC', // Staggered Sale Closed
    staggeredSaleInProgress = 'S', // Staggered Sale in Progress
    tenderedPending = 'TP', // Pricing Sent to Selling System (Tendered $ Pending)
    staggeredTenderedPending = 'SP', // Pricing Sent to Selling System (Staggered Tendered $ Pending)
    staggeredCompleteTenderedPending = 'CP' // Pricing Sent to Selling System (Staggered Completed Tendered $ Pending)
}

export enum QuoteActivityEnum {
        QuoteCreation = 1,
        QuoteReset,
        StatusChange,
        SentToSellingSystem,
        QuoteReceivedSold,
        LineItemPricingRequest,
        QuotePricingRequest,
        LineItemQuantityChange,
        RestoredDeletedItems,
        DeletedLineItems
}

