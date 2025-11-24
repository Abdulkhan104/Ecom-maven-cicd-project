package com.zosh.domain;

public enum AccountStatus {


    PENDING_VERIFICATION, // Account is created but not yet verified
    ACTIVE,               // Account is active and in good standing
    SUSPENDED,            // Acoount is temporarily suspended , possibly due to violations
    DEACTIVATED,          // Account is deactivated, user may have chosen to deactivated it
    BANNED,               // Account is permanantly banned due to severe voilations
    CLOSED                // Account is permanantly closed, possibly at user request

}
