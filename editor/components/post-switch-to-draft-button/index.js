/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';

export default function PostSwitchToDraftButton() {
	return (
		<Button
			className="editor-post-publish-dropdown__switch-to-draft"
			isLarge
		>
			{ __( 'Switch to Draft' ) }
		</Button>
	);
}
