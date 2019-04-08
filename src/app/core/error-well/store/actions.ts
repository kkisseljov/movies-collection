import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class ErrorWellActions {
    static readonly SHOW = 'ERROR_WELL_SHOW';
    static readonly DISMISS = 'ERROR_WELL_DISMISS';

    @dispatch()
    show = (message: string) => ({
       type: ErrorWellActions.SHOW,
       payload: { message },
    });

    @dispatch()
    dismiss = () => ({
        type: ErrorWellActions.DISMISS,
    });
}
